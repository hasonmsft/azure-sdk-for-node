// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819616\",\"not_before\":\"1459815716\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1NzE2LCJuYmYiOjE0NTk4MTU3MTYsImV4cCI6MTQ1OTgxOTYxNiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.BVi6_m7gGDNqubZNS503myGn3546rgJyUAr63BqnIkdPQiu6sX4GfHLdNYZ_R1VYrl6zjoV7booaOficqUNBJvNikN7-Xujr4_nUC2SuDQp1qClaG6yHvdW7JVT0tb9zFArT-WusMUvRrjLqLfI4JLCOvLRaN7HT6wfA5iVFhbxRyC25pfZ1hkwYbIKU0_dEvO7NrUU55Hrlz-NDfD3VVDbirbzqcVya0ulSrEvpbFYEVwXU0qg4YjpbDOxbFw-DqHdO_xqST-vMc5E8GkBgNGNvHwxcCO1lAUmLK23w2tQe1amQoDIl_S_h2kzfWZlSoqcPx3tXC-ZFijUdOk6Exw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '5ac492fd-64a5-4823-92f5-fdbe544174ea',
  'client-request-id': '6c338685-cb63-42f0-af9f-27e1658ab5d0',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_159',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:26:56 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819616\",\"not_before\":\"1459815716\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1NzE2LCJuYmYiOjE0NTk4MTU3MTYsImV4cCI6MTQ1OTgxOTYxNiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.BVi6_m7gGDNqubZNS503myGn3546rgJyUAr63BqnIkdPQiu6sX4GfHLdNYZ_R1VYrl6zjoV7booaOficqUNBJvNikN7-Xujr4_nUC2SuDQp1qClaG6yHvdW7JVT0tb9zFArT-WusMUvRrjLqLfI4JLCOvLRaN7HT6wfA5iVFhbxRyC25pfZ1hkwYbIKU0_dEvO7NrUU55Hrlz-NDfD3VVDbirbzqcVya0ulSrEvpbFYEVwXU0qg4YjpbDOxbFw-DqHdO_xqST-vMc5E8GkBgNGNvHwxcCO1lAUmLK23w2tQe1amQoDIl_S_h2kzfWZlSoqcPx3tXC-ZFijUdOk6Exw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '5ac492fd-64a5-4823-92f5-fdbe544174ea',
  'client-request-id': '6c338685-cb63-42f0-af9f-27e1658ab5d0',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_159',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:26:56 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains/cdnTestCustomDomain8977?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestCustomDomain8977\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customdomains/cdnTestCustomDomain8977\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"hostName\":\"sdk-1-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge-test.net\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '495',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e79cf899-e4a4-4a5f-a08e-d32b26a19713',
  'x-ms-client-request-id': 'd7bb18a3-37e4-4d95-a515-140ff49626d5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup9566/providers/Microsoft.Cdn/operationresults/25be3491-2b06-44c3-b716-b2539aa1973e?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'ac202715-0b2f-410f-b549-bae230918e5e',
  'x-ms-routing-request-id': 'WESTUS:20160405T002658Z:ac202715-0b2f-410f-b549-bae230918e5e',
  date: 'Tue, 05 Apr 2016 00:26:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains/cdnTestCustomDomain8977?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestCustomDomain8977\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customdomains/cdnTestCustomDomain8977\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"hostName\":\"sdk-1-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge-test.net\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '495',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e79cf899-e4a4-4a5f-a08e-d32b26a19713',
  'x-ms-client-request-id': 'd7bb18a3-37e4-4d95-a515-140ff49626d5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup9566/providers/Microsoft.Cdn/operationresults/25be3491-2b06-44c3-b716-b2539aa1973e?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'ac202715-0b2f-410f-b549-bae230918e5e',
  'x-ms-routing-request-id': 'WESTUS:20160405T002658Z:ac202715-0b2f-410f-b549-bae230918e5e',
  date: 'Tue, 05 Apr 2016 00:26:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459819648\",\"not_before\":\"1459815748\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1NzQ4LCJuYmYiOjE0NTk4MTU3NDgsImV4cCI6MTQ1OTgxOTY0OCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.MZXz-zzn21z7Iwefcl81_hlXzSNz8sYDnRk_qlQNwDf2w6C8zh2fDmbcnuj8Pm8_3GF4PcdKfZ4dHfC2aXfopaxjVoOPUjdJjoWtxLB0txIrwfKa9XLbC4gUjadar6EZ2R972ZpLgsSPFQuzFcYixCX8Oynhxb-6VLV8mCRU26peG6J4Ea9uRKbtl9UCg8aglNsdGXehj_6hjtLUNSwyjLLNMf5I3HGYL-0TZ50PUVPAVlfyoASXzGakmuUpDDmSnvNTvhJ1AQwVRcwiaZPooyHiRND1FJe1B59kTveMX2zwWPX7HwPkaLHSlaK-_AaoCfK8kcbfpIpG9GO_e9ehVA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '5dbc2be7-7d77-472d-92fd-84760799fd73',
  'client-request-id': '4463a632-6f89-4d1d-ac32-f3328125d953',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_95',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:27:27 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459819648\",\"not_before\":\"1459815748\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1NzQ4LCJuYmYiOjE0NTk4MTU3NDgsImV4cCI6MTQ1OTgxOTY0OCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.MZXz-zzn21z7Iwefcl81_hlXzSNz8sYDnRk_qlQNwDf2w6C8zh2fDmbcnuj8Pm8_3GF4PcdKfZ4dHfC2aXfopaxjVoOPUjdJjoWtxLB0txIrwfKa9XLbC4gUjadar6EZ2R972ZpLgsSPFQuzFcYixCX8Oynhxb-6VLV8mCRU26peG6J4Ea9uRKbtl9UCg8aglNsdGXehj_6hjtLUNSwyjLLNMf5I3HGYL-0TZ50PUVPAVlfyoASXzGakmuUpDDmSnvNTvhJ1AQwVRcwiaZPooyHiRND1FJe1B59kTveMX2zwWPX7HwPkaLHSlaK-_AaoCfK8kcbfpIpG9GO_e9ehVA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '5dbc2be7-7d77-472d-92fd-84760799fd73',
  'client-request-id': '4463a632-6f89-4d1d-ac32-f3328125d953',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_95',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:27:27 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup9566/providers/Microsoft.Cdn/operationresults/25be3491-2b06-44c3-b716-b2539aa1973e?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '459c9094-f754-4066-8ffe-68ea94579bde',
  'x-ms-client-request-id': '617df07c-d023-49e2-b51e-6553c72522a4',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'e4bcc3e7-4229-4a4c-8fac-0aaf62988c3c',
  'x-ms-routing-request-id': 'WESTUS:20160405T002729Z:e4bcc3e7-4229-4a4c-8fac-0aaf62988c3c',
  date: 'Tue, 05 Apr 2016 00:27:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup9566/providers/Microsoft.Cdn/operationresults/25be3491-2b06-44c3-b716-b2539aa1973e?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '459c9094-f754-4066-8ffe-68ea94579bde',
  'x-ms-client-request-id': '617df07c-d023-49e2-b51e-6553c72522a4',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'e4bcc3e7-4229-4a4c-8fac-0aaf62988c3c',
  'x-ms-routing-request-id': 'WESTUS:20160405T002729Z:e4bcc3e7-4229-4a4c-8fac-0aaf62988c3c',
  date: 'Tue, 05 Apr 2016 00:27:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459819649\",\"not_before\":\"1459815749\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1NzQ5LCJuYmYiOjE0NTk4MTU3NDksImV4cCI6MTQ1OTgxOTY0OSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.h2p8MaWOSzs2ewios-ubJLPMbyY4rlVKAdBfJxUy_d9lN33e6FgFXg0EfX7EfyWZ4E81jaD7U2FxMLsS9mkoEDpPh5liR90UVW5FHUbEBGsiKJD80ivRX0uDp5ckPo-X3QctZkETnhfEIM8zohJ2ImJtZznlJPtNSjYYhxTb89AqpI39HfwQsHpd_P-GanWolQgTKyQaVZb6Y6V0TQ8i38MgUrTNLzxtu81CyQmRGBj_GY3ulrTsGxCr8DuNZtD9eRpAimedUSmoFQK7_Nng8YR7jvV_gtbS0UEtvCl5GTamf7kLmAXPFJHaFCyWISMYxfES01gH4F5m8dTXGXy-xQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'b43f29db-26a2-4a53-822f-053f5a320596',
  'client-request-id': '68fd17f7-8f5f-4b04-a32c-64e61bbae2cb',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_77',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:27:29 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459819649\",\"not_before\":\"1459815749\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1NzQ5LCJuYmYiOjE0NTk4MTU3NDksImV4cCI6MTQ1OTgxOTY0OSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.h2p8MaWOSzs2ewios-ubJLPMbyY4rlVKAdBfJxUy_d9lN33e6FgFXg0EfX7EfyWZ4E81jaD7U2FxMLsS9mkoEDpPh5liR90UVW5FHUbEBGsiKJD80ivRX0uDp5ckPo-X3QctZkETnhfEIM8zohJ2ImJtZznlJPtNSjYYhxTb89AqpI39HfwQsHpd_P-GanWolQgTKyQaVZb6Y6V0TQ8i38MgUrTNLzxtu81CyQmRGBj_GY3ulrTsGxCr8DuNZtD9eRpAimedUSmoFQK7_Nng8YR7jvV_gtbS0UEtvCl5GTamf7kLmAXPFJHaFCyWISMYxfES01gH4F5m8dTXGXy-xQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'b43f29db-26a2-4a53-822f-053f5a320596',
  'client-request-id': '68fd17f7-8f5f-4b04-a32c-64e61bbae2cb',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_77',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:27:29 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains/cdnTestCustomDomain8977?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cdnTestCustomDomain8977\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customdomains/cdnTestCustomDomain8977\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge-test.net\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '494',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '7b514ab5-6617-4690-8584-c2b80c683508',
  'x-ms-client-request-id': '90aad065-2319-465b-a2cb-423278e2d8b1',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '9a22d51b-c99a-4e73-9d4b-c846db82a318',
  'x-ms-routing-request-id': 'WESTUS:20160405T002731Z:9a22d51b-c99a-4e73-9d4b-c846db82a318',
  date: 'Tue, 05 Apr 2016 00:27:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains/cdnTestCustomDomain8977?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cdnTestCustomDomain8977\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customdomains/cdnTestCustomDomain8977\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge-test.net\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '494',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '7b514ab5-6617-4690-8584-c2b80c683508',
  'x-ms-client-request-id': '90aad065-2319-465b-a2cb-423278e2d8b1',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '9a22d51b-c99a-4e73-9d4b-c846db82a318',
  'x-ms-routing-request-id': 'WESTUS:20160405T002731Z:9a22d51b-c99a-4e73-9d4b-c846db82a318',
  date: 'Tue, 05 Apr 2016 00:27:30 GMT',
  connection: 'close' });
 return result; }]];