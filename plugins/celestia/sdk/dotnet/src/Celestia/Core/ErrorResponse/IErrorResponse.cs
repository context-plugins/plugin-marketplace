using System.Threading;
using System.Threading.Tasks;
using Celestia.Core.Models;

namespace Celestia.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
