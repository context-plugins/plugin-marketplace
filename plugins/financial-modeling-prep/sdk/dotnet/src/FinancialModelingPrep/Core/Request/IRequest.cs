using System.Net.Http;

namespace FinancialModelingPrep.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
