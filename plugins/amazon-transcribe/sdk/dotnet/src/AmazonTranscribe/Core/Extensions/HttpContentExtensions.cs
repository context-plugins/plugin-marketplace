using System.Net.Http;

namespace AmazonTranscribe.Core.Extensions;

internal static class HttpContentExtension
{
    extension(HttpContent)
    {
        public static HttpContent None => null!;
    }
}
