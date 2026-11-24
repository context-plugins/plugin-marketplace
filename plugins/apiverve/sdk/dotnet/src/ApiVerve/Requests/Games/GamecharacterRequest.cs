namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Gamecharacter operation.
/// </summary>
public sealed record GamecharacterRequest
{
    /// <summary>
    /// Character race: Human, Elf, Dwarf, Halfling, Orc, Gnome, Tiefling, Dragonborn, Half-Elf, Goblin
    /// </summary>
    public string? Race { get; init; }

    /// <summary>
    /// Character class: Warrior, Mage, Rogue, Cleric, Ranger, Paladin, Barbarian, Bard, Druid, Monk, Warlock, Necromancer
    /// </summary>
    public string? Class { get; init; }
}
