using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Deliverd.Core.Hooks;
using Deliverd.Core.Models;

namespace Deliverd.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
