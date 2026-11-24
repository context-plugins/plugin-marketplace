using System.Threading;
using System.Threading.Tasks;
using Curlec.Core.Models;

namespace Curlec.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
