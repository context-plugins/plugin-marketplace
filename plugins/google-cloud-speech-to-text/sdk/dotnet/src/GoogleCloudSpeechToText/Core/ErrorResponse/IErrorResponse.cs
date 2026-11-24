using System.Threading;
using System.Threading.Tasks;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
