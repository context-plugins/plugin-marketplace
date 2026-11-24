using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Soda.Core.Hooks;
using Soda.Core.Models;

namespace Soda.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
