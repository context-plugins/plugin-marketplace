using System.Threading;
using System.Threading.Tasks;
using Sapling.Core.Models;

namespace Sapling.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
