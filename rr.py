import requests
from bs4 import BeautifulSoup
import pandas as pd

# Define the URL
url = 'https://bsi.gov.in/page/en/medicinal-plant-database'

# Fetch the content from the URL
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Find the table
table = soup.find('table')

# Extract headers
headers = [header.text for header in table.find_all('th')]

# Extract rows
rows = []
for row in table.find_all('tr')[1:]:  # Skip the header row
    cols = [col.text for col in row.find_all('td')]
    rows.append(cols)

# Create a DataFrame
df = pd.DataFrame(rows, columns=headers)

# Save DataFrame to CSV
df.to_csv('data1.csv', index=False)