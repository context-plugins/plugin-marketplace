using System.Threading;
using System.Threading.Tasks;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
