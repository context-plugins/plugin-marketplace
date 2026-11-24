using System.Net.Http;

namespace NordicFinancialNews.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
