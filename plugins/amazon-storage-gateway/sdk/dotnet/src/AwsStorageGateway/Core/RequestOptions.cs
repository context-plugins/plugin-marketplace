using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AwsStorageGateway.Core.Hooks;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
