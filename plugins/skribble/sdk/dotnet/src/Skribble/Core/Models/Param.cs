namespace Skribble.Core.Models;

internal readonly record struct Param(string? Key, object? Value, SerializationFormat Format)
{
    public Param(string? key, object? value) : this(key, value, SerializationFormat.Plain) { }

    public Param(object? value) : this(null, value) { }
}
