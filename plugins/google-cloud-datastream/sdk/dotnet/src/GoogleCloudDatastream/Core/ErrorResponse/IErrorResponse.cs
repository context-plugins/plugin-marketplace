using System.Threading;
using System.Threading.Tasks;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
