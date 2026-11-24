using System.Threading;
using System.Threading.Tasks;
using Soda.Core.Models;

namespace Soda.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
