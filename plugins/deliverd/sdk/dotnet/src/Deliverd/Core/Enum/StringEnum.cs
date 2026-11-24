namespace Deliverd.Core.Enum;

public abstract record StringEnum<TEnum> : TypedEnum<string, TEnum> where TEnum : StringEnum<TEnum>
{
    private protected StringEnum(string value) : base(value) { }
}

public abstract record OpenStringEnum<TEnum> : StringEnum<TEnum> where TEnum : OpenStringEnum<TEnum>
{
    protected OpenStringEnum(string value) : base(value) { }
}

public abstract record ClosedStringEnum<TEnum> : StringEnum<TEnum>, IClosedEnum where TEnum : ClosedStringEnum<TEnum>
{
    protected ClosedStringEnum(string value) : base(value) { }
}
