using System.Net.Http;

namespace Dynamics365BusinessCentral.Core.Extensions;

internal static class HttpContentExtension
{
    extension(HttpContent)
    {
        public static HttpContent None => null!;
    }
}
