using System.Threading;
using System.Threading.Tasks;
using OddsRelay.Core.Models;

namespace OddsRelay.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
