using System.Net.Http;

namespace AmazonRekognition.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
