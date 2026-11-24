using System.Net.Http;

namespace CarsXe.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
