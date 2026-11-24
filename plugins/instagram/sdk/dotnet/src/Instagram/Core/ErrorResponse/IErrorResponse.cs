using System.Threading;
using System.Threading.Tasks;
using Instagram.Core.Models;

namespace Instagram.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
