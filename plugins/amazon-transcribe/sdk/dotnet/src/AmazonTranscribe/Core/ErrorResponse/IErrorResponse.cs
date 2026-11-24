using System.Threading;
using System.Threading.Tasks;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
