using System.Net.Http;

namespace AwsCodeBuild.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
