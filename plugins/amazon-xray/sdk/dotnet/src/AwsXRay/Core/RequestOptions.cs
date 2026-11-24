using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AwsXRay.Core.Hooks;
using AwsXRay.Core.Models;

namespace AwsXRay.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
