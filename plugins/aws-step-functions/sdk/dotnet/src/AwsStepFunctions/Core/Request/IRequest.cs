using System.Net.Http;

namespace AwsStepFunctions.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
