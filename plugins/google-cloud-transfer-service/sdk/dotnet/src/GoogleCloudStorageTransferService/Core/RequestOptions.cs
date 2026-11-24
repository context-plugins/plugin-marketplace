using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using GoogleCloudStorageTransferService.Core.Hooks;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
