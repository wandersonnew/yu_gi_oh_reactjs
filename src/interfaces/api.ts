export interface IQueryCard
{
    name: string;
    type: string;
    humanreadablecardtype: string;
    frametype: string;
    description: string;
    race: string;
    atk?: number;
    def?: number;
    level?: number;
    attribute?: string;
    archetype?: string;
    ygoprodeckurl: string;
    image: string;
}