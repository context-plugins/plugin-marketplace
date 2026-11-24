using System.Threading;
using System.Threading.Tasks;
using Lili.Core.Models;

namespace Lili.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
