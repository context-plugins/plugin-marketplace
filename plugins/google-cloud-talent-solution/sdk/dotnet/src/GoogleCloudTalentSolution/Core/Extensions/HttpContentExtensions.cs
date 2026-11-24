using System.Net.Http;

namespace GoogleCloudTalentSolution.Core.Extensions;

internal static class HttpContentExtension
{
    extension(HttpContent)
    {
        public static HttpContent None => null!;
    }
}
