using System.Net.Http;

namespace AwsStorageGateway.Core.Extensions;

internal static class HttpContentExtension
{
    extension(HttpContent)
    {
        public static HttpContent None => null!;
    }
}
