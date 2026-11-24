using AmazonLex.Servers;

namespace AmazonLex;

public class ServerOptions
{
    public DefaultOptions Default { get; set; } = new();
    public DefaultAmazonLexModelBuildingV2BotsApiOptions DefaultAmazonLexModelBuildingV2BotsApi { get; set; } = new();
    public DefaultAmazonLexModelBuildingV2BuiltinsApiOptions DefaultAmazonLexModelBuildingV2BuiltinsApi { get; set; } = new();
    public DefaultAmazonLexModelBuildingV2ExportsApiOptions DefaultAmazonLexModelBuildingV2ExportsApi { get; set; } = new();
    public DefaultAmazonLexModelBuildingV2OperationsApiOptions DefaultAmazonLexModelBuildingV2OperationsApi { get; set; } = new();
    public DefaultAmazonLexModelBuildingV2TagsApiOptions DefaultAmazonLexModelBuildingV2TagsApi { get; set; } = new();
}
