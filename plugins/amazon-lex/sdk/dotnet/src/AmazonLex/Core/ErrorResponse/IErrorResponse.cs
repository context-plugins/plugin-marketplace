using System.Threading;
using System.Threading.Tasks;
using AmazonLex.Core.Models;

namespace AmazonLex.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
