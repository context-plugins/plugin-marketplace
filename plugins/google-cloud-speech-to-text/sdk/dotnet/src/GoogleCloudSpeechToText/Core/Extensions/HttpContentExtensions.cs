using System.Net.Http;

namespace GoogleCloudSpeechToText.Core.Extensions;

internal static class HttpContentExtension
{
    extension(HttpContent)
    {
        public static HttpContent None => null!;
    }
}
