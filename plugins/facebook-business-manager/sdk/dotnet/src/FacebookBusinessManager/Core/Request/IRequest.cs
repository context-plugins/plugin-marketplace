using System.Net.Http;

namespace FacebookBusinessManager.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
