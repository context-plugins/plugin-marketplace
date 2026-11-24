using System.Net.Http;

namespace GoogleCloudDatastream.Core.Extensions;

internal static class HttpContentExtension
{
    extension(HttpContent)
    {
        public static HttpContent None => null!;
    }
}
