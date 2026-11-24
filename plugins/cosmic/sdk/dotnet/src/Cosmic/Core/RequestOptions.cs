using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Cosmic.Core.Hooks;
using Cosmic.Core.Models;

namespace Cosmic.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
