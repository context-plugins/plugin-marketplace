using System.Collections.Generic;
using System.Net.Http.Headers;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Core.Extensions;

internal static class HttpRequestExtensions
{
    extension(HttpRequestHeaders requestHeaders)
    {
        public void AddRange(IReadOnlyCollection<HeaderParam> headers)
        {
            foreach (var header in headers)
                requestHeaders.Add(header.Key, ParameterFlattener.Flatten(header.Value));
        }
    }
}
