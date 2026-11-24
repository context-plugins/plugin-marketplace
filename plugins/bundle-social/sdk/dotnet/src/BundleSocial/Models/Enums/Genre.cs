using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Genre>))]
public sealed record Genre : OpenStringEnum<Genre>
{
    private Genre(string value) : base(value)
    {
    }

    public static readonly Genre Rock = new("ROCK");

    public static readonly Genre Pop = new("POP");

    public static readonly Genre Latin = new("LATIN");

    public static readonly Genre Metal = new("METAL");

    public static readonly Genre Electronic = new("ELECTRONIC");

    public static readonly Genre HipHopRap = new("HIP_HOP/RAP");

    public static readonly Genre AlternativeIndie = new("ALTERNATIVE/INDIE");

    public static readonly Genre RbSoul = new("R&B/SOUL");

    public static readonly Genre Country = new("COUNTRY");

    public static readonly Genre Classical = new("CLASSICAL");

    public static readonly Genre Jazz = new("JAZZ");

    public static readonly Genre Childhood = new("CHILDHOOD");

    public static readonly Genre AlternativeHipHop = new("ALTERNATIVE_HIP_HOP");

    public static readonly Genre Ambient = new("AMBIENT");

    public static readonly Genre BossaNova = new("BOSSA_NOVA");

    public static readonly Genre BrazilianFunkStyle = new("BRAZILIAN_FUNK_STYLE");

    public static readonly Genre ChillBeats = new("CHILL_BEATS");

    public static readonly Genre Chillout = new("CHILLOUT");

    public static readonly Genre ChinesePop = new("CHINESE_POP");

    public static readonly Genre ChristianMusic = new("CHRISTIAN_MUSIC");

    public static readonly Genre CountryPop = new("COUNTRY_POP");

    public static readonly Genre DancePop = new("DANCE_POP");

    public static readonly Genre Disco = new("DISCO");

    public static readonly Genre Dj = new("DJ");

    public static readonly Genre DrumBass = new("DRUM&BASS");

    public static readonly Genre Dubstep = new("DUBSTEP");

    public static readonly Genre Edm = new("EDM");

    public static readonly Genre Funk = new("FUNK");

    public static readonly Genre House = new("HOUSE");

    public static readonly Genre IndiePop = new("INDIE_POP");

    public static readonly Genre JPop = new("J-POP");

    public static readonly Genre KPop = new("K-POP");

    public static readonly Genre LatinPop = new("LATIN_POP");

    public static readonly Genre LoFi = new("LO-FI");

    public static readonly Genre OldSchool = new("OLD_SCHOOL");

    public static readonly Genre Punk = new("PUNK");

    public static readonly Genre RussianPop = new("RUSSIAN_POP");

    public static readonly Genre Soul = new("SOUL");

    public static readonly Genre Soundtrack = new("SOUNDTRACK");

    public static readonly Genre SynthPop = new("SYNTH_POP");

    public static readonly Genre Techno = new("TECHNO");

    public static readonly Genre TeenPop = new("TEEN_POP");

    public TResult Match<TResult>(Func<TResult> onRock,
        Func<TResult> onPop,
        Func<TResult> onLatin,
        Func<TResult> onMetal,
        Func<TResult> onElectronic,
        Func<TResult> onHipHopRap,
        Func<TResult> onAlternativeIndie,
        Func<TResult> onRbSoul,
        Func<TResult> onCountry,
        Func<TResult> onClassical,
        Func<TResult> onJazz,
        Func<TResult> onChildhood,
        Func<TResult> onAlternativeHipHop,
        Func<TResult> onAmbient,
        Func<TResult> onBossaNova,
        Func<TResult> onBrazilianFunkStyle,
        Func<TResult> onChillBeats,
        Func<TResult> onChillout,
        Func<TResult> onChinesePop,
        Func<TResult> onChristianMusic,
        Func<TResult> onCountryPop,
        Func<TResult> onDancePop,
        Func<TResult> onDisco,
        Func<TResult> onDj,
        Func<TResult> onDrumBass,
        Func<TResult> onDubstep,
        Func<TResult> onEdm,
        Func<TResult> onFunk,
        Func<TResult> onHouse,
        Func<TResult> onIndiePop,
        Func<TResult> onJPop,
        Func<TResult> onKPop,
        Func<TResult> onLatinPop,
        Func<TResult> onLoFi,
        Func<TResult> onOldSchool,
        Func<TResult> onPunk,
        Func<TResult> onRussianPop,
        Func<TResult> onSoul,
        Func<TResult> onSoundtrack,
        Func<TResult> onSynthPop,
        Func<TResult> onTechno,
        Func<TResult> onTeenPop,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Rock => onRock(),
            _ when this == Pop => onPop(),
            _ when this == Latin => onLatin(),
            _ when this == Metal => onMetal(),
            _ when this == Electronic => onElectronic(),
            _ when this == HipHopRap => onHipHopRap(),
            _ when this == AlternativeIndie => onAlternativeIndie(),
            _ when this == RbSoul => onRbSoul(),
            _ when this == Country => onCountry(),
            _ when this == Classical => onClassical(),
            _ when this == Jazz => onJazz(),
            _ when this == Childhood => onChildhood(),
            _ when this == AlternativeHipHop => onAlternativeHipHop(),
            _ when this == Ambient => onAmbient(),
            _ when this == BossaNova => onBossaNova(),
            _ when this == BrazilianFunkStyle => onBrazilianFunkStyle(),
            _ when this == ChillBeats => onChillBeats(),
            _ when this == Chillout => onChillout(),
            _ when this == ChinesePop => onChinesePop(),
            _ when this == ChristianMusic => onChristianMusic(),
            _ when this == CountryPop => onCountryPop(),
            _ when this == DancePop => onDancePop(),
            _ when this == Disco => onDisco(),
            _ when this == Dj => onDj(),
            _ when this == DrumBass => onDrumBass(),
            _ when this == Dubstep => onDubstep(),
            _ when this == Edm => onEdm(),
            _ when this == Funk => onFunk(),
            _ when this == House => onHouse(),
            _ when this == IndiePop => onIndiePop(),
            _ when this == JPop => onJPop(),
            _ when this == KPop => onKPop(),
            _ when this == LatinPop => onLatinPop(),
            _ when this == LoFi => onLoFi(),
            _ when this == OldSchool => onOldSchool(),
            _ when this == Punk => onPunk(),
            _ when this == RussianPop => onRussianPop(),
            _ when this == Soul => onSoul(),
            _ when this == Soundtrack => onSoundtrack(),
            _ when this == SynthPop => onSynthPop(),
            _ when this == Techno => onTechno(),
            _ when this == TeenPop => onTeenPop(),
            _ => otherwise(Value)
        };

    public void Match(Action onRock,
        Action onPop,
        Action onLatin,
        Action onMetal,
        Action onElectronic,
        Action onHipHopRap,
        Action onAlternativeIndie,
        Action onRbSoul,
        Action onCountry,
        Action onClassical,
        Action onJazz,
        Action onChildhood,
        Action onAlternativeHipHop,
        Action onAmbient,
        Action onBossaNova,
        Action onBrazilianFunkStyle,
        Action onChillBeats,
        Action onChillout,
        Action onChinesePop,
        Action onChristianMusic,
        Action onCountryPop,
        Action onDancePop,
        Action onDisco,
        Action onDj,
        Action onDrumBass,
        Action onDubstep,
        Action onEdm,
        Action onFunk,
        Action onHouse,
        Action onIndiePop,
        Action onJPop,
        Action onKPop,
        Action onLatinPop,
        Action onLoFi,
        Action onOldSchool,
        Action onPunk,
        Action onRussianPop,
        Action onSoul,
        Action onSoundtrack,
        Action onSynthPop,
        Action onTechno,
        Action onTeenPop,
        Action<string> otherwise)
    {
        if (this == Rock) onRock();
        else if (this == Pop) onPop();
        else if (this == Latin) onLatin();
        else if (this == Metal) onMetal();
        else if (this == Electronic) onElectronic();
        else if (this == HipHopRap) onHipHopRap();
        else if (this == AlternativeIndie) onAlternativeIndie();
        else if (this == RbSoul) onRbSoul();
        else if (this == Country) onCountry();
        else if (this == Classical) onClassical();
        else if (this == Jazz) onJazz();
        else if (this == Childhood) onChildhood();
        else if (this == AlternativeHipHop) onAlternativeHipHop();
        else if (this == Ambient) onAmbient();
        else if (this == BossaNova) onBossaNova();
        else if (this == BrazilianFunkStyle) onBrazilianFunkStyle();
        else if (this == ChillBeats) onChillBeats();
        else if (this == Chillout) onChillout();
        else if (this == ChinesePop) onChinesePop();
        else if (this == ChristianMusic) onChristianMusic();
        else if (this == CountryPop) onCountryPop();
        else if (this == DancePop) onDancePop();
        else if (this == Disco) onDisco();
        else if (this == Dj) onDj();
        else if (this == DrumBass) onDrumBass();
        else if (this == Dubstep) onDubstep();
        else if (this == Edm) onEdm();
        else if (this == Funk) onFunk();
        else if (this == House) onHouse();
        else if (this == IndiePop) onIndiePop();
        else if (this == JPop) onJPop();
        else if (this == KPop) onKPop();
        else if (this == LatinPop) onLatinPop();
        else if (this == LoFi) onLoFi();
        else if (this == OldSchool) onOldSchool();
        else if (this == Punk) onPunk();
        else if (this == RussianPop) onRussianPop();
        else if (this == Soul) onSoul();
        else if (this == Soundtrack) onSoundtrack();
        else if (this == SynthPop) onSynthPop();
        else if (this == Techno) onTechno();
        else if (this == TeenPop) onTeenPop();
        else otherwise(Value);
    }
}
