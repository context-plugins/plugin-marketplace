using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Buildkite.Core.Hooks;
using Buildkite.Core.Models;

namespace Buildkite.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
