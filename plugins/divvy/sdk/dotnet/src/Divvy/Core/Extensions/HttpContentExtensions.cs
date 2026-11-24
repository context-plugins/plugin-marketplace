using System.Net.Http;

namespace Divvy.Core.Extensions;

internal static class HttpContentExtension
{
    extension(HttpContent)
    {
        public static HttpContent None => null!;
    }
}
