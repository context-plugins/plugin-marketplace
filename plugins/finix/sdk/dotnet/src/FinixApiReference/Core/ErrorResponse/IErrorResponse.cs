using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
