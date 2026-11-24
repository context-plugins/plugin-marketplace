using System.Threading;
using System.Threading.Tasks;
using Paid.Core.Models;

namespace Paid.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
