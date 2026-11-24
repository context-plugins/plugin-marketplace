using System.Net.Http;

namespace Airtable.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
