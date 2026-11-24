using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using PrismaReviews.Core.Hooks;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
