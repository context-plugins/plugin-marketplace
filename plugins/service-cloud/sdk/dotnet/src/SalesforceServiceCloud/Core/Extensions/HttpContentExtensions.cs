using System.Net.Http;

namespace SalesforceServiceCloud.Core.Extensions;

internal static class HttpContentExtension
{
    extension(HttpContent)
    {
        public static HttpContent None => null!;
    }
}
