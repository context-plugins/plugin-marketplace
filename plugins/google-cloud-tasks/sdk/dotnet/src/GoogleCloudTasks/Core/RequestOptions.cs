using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using GoogleCloudTasks.Core.Hooks;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
