using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Leadspace.Core.Hooks;
using Leadspace.Core.Models;

namespace Leadspace.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
