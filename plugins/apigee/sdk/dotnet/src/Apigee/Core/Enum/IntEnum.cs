namespace Apigee.Core.Enum;

public abstract record IntEnum<TEnum> : TypedEnum<long, TEnum> where TEnum : IntEnum<TEnum>
{
    private protected IntEnum(long value) : base(value) { }
}

public abstract record OpenIntEnum<TEnum> : IntEnum<TEnum> where TEnum : OpenIntEnum<TEnum>
{
    protected OpenIntEnum(long value) : base(value) { }
}

public abstract record ClosedIntEnum<TEnum> : IntEnum<TEnum>, IClosedEnum where TEnum : ClosedIntEnum<TEnum>
{
    protected ClosedIntEnum(long value) : base(value) { }
}
