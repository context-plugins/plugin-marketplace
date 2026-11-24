using System.Threading;
using System.Threading.Tasks;
using Perigon.Core.Models;

namespace Perigon.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
