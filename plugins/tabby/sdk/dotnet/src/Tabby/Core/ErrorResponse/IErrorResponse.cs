using System.Threading;
using System.Threading.Tasks;
using Tabby.Core.Models;

namespace Tabby.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
