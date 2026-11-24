using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Paid.Core.Hooks;
using Paid.Core.Models;

namespace Paid.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
