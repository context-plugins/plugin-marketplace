using System.Threading;
using System.Threading.Tasks;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
