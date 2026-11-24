using System.Threading;
using System.Threading.Tasks;
using MrScraper.Core.Models;

namespace MrScraper.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
