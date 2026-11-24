using System.Threading;
using System.Threading.Tasks;
using Fillo.Core.Models;

namespace Fillo.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
