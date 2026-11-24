using System.Threading;
using System.Threading.Tasks;
using Postscript.Core.Models;

namespace Postscript.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
