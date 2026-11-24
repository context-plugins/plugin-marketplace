using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Bitbucket.Core.Hooks;
using Bitbucket.Core.Models;

namespace Bitbucket.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
